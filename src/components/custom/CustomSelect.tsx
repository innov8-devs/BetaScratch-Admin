import { FieldProps } from 'formik'
import React from 'react'
import Select from 'react-select'

interface Option {
  label: string
  value: string
}

interface CustomSelectProps extends FieldProps {
  options: any
  isMulti?: boolean
  formLabel?: string
  placeholder?: string
  defaultValue?: Option
}

export const CustomSelect = ({
  field,
  form,
  options,
  isMulti = false,
  formLabel,
  placeholder,
  defaultValue,
}: CustomSelectProps) => {
  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(
            (option: Option) => field.value.indexOf(option.value) >= 0
          )
        : options.find((option: Option) => option.value === field.value)
    } else {
      return isMulti ? [] : ('' as any)
    }
  }

  const onChange = (option: any) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => {
            return item.value
          })
        : (option as Option).value
    )
  }

  const reactSelectStyles = (base: any) => ({ ...base, zIndex: 999 })

  return (
    <>
      {formLabel ? (
        <label
          htmlFor={field.name}
          className="text-sm font-medium leading-7 text-gray-600"
        >
          {formLabel}
        </label>
      ) : null}

      <Select
        name={field.name}
        value={getValue()}
        options={options}
        isMulti={isMulti}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : null}
        onChange={onChange}
      />
    </>
  )
}
