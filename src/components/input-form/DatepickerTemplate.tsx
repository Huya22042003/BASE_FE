import React, { memo, useEffect } from 'react';
import { DatePicker } from 'antd';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';
import { TYPE_MANAGEMENT } from '../../interface/constants/type/Type.const';
import { addField, removeField, updateFieldCheck } from '../../app/reducers/common/Validate/Validate.reducer';
import { useAppDispatch } from '../../app/hooks';

interface Props {
  name: string;
  control: any;
  mode?: string;
  required?: boolean;
  [key: string]: any;
}

const DatePickerTemplate: React.FC<Props> = ({ name, mode, control, required, ...restProps }) => {
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
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          disabled={mode === TYPE_MANAGEMENT.MODE_DETAIL}
          value={value ? dayjs(value) : null}
          onChange={(date, dateString) => {
            onChange(dateString);
            checkValidateField(!!dateString); // Kiểm tra nếu có giá trị được chọn
          }}
          {...restProps}
        />
      )}
    />
  );
};

export default memo(DatePickerTemplate);
