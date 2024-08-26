import React, { memo, useEffect } from "react";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/hooks";
import { addField, removeField, updateFieldCheck } from "../../app/reducers/common/Validate/Validate.reducer";

const SelectBoxTemplate: React.FC<any> = ({
  name,
  control,
  mode,
  options,
  defaultValue,
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
  
  const checkValidateField = (value: any) => {
    if (required) {
      dispatch(updateFieldCheck({ field: name, check: !!value }));
    }
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
            <div
                  className={`min-w-[150px] text-black select_ui ${restProps.className} ${required && !field.value? 'input_required' : ''}`}
                  >
              
              <Select
                  {...field}
                  defaultValue={defaultValue}
                  placeholder={t('common.select.placeholder')}
                  disabled={mode === TYPE_MANAGEMENT.MODE_DETAIL}
                  allowClear
                  options={options}
                  onChange={(value) => {
                    field.onChange(value);
                    checkValidateField(value);
                  }}
                  {...restProps}
                />
            </div>
            </>
          );
        }}
      />
    </>
  );
};

export default memo(SelectBoxTemplate);
