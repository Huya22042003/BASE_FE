import React, { memo, useEffect } from "react";
import { Checkbox } from "antd";
import { Controller } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
import { addField, removeField, updateFieldCheck } from "../../app/reducers/common/Validate/Validate.reducer";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  name: string;
  control: any;
  mode?: string;
  required?: boolean;
  label?: string;
  [key: string]: any;
}

const CheckboxTemplate: React.FC<Props> = ({
  name,
  control,
  mode,
  required,
  label,
  ...restProps
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (required) {
      dispatch(addField({ field: name, check: false }));

      return () => {
        dispatch(removeField(name));
      };
    }
  }, [dispatch, name]);

  const checkValidateField = (check: boolean) => {
    if (required) {
      dispatch(updateFieldCheck({ field: name, check: check }));
    }
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Checkbox
              disabled={mode === TYPE_MANAGEMENT.MODE_DETAIL}
              {...field}
              {...restProps}
              onChange={(e) => {
                field.onChange(e.target.checked);
                checkValidateField(e.target.checked);
              }}
            >
              {label}
            </Checkbox>
          );
        }}
      />
    </>
  );
};

export default memo(CheckboxTemplate);
