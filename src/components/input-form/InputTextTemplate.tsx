import React, { memo, useEffect } from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { useTranslation } from "react-i18next";
import { addField, removeField, updateFieldCheck } from "../../app/reducers/common/Validate/Validate.reducer";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  name: string;
  control: any;
  mode?: string;
  required?:boolean;
  [key: string]: any;
}

const InputTextTemplate: React.FC<Props> = ({
  name,
  mode,
  control,
  required,
  ...restProps
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (required) {
      dispatch(addField({ field: name, check: false }));

      return () => {
        dispatch(removeField(name));
      };
    }
  }, [dispatch, name]);

  const checkValidateField = (check:boolean) => {
    if (required) {
      dispatch(updateFieldCheck({ field: name, check: check }));
    }
  }

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              {mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
                <span {...field}>{field.value}</span>
              ) : (
                <Input
                  {...field}
                  {...restProps}
                  placeholder={t("common.input.placeholder")}
                  className={`${restProps.className} ${required && !field.value? 'input_required' : ''}`}
                  onBlur={(e) => {
                    if (field.value) {
                      field.onChange(field.value.trim());
                      checkValidateField(true);
                    } else {
                      checkValidateField(false);
                    }
                  }}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default memo(InputTextTemplate);
