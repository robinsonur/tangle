import { FC, ReactElement } from 'react';
import {
  Controller,
  type Control,
  type UseControllerProps,
  type FieldValues,
  type ControllerProps
} from 'react-hook-form';
import {
  TextInput,
  HelperText,
  type TextInputIconProps,
  type TextInputAffixProps
} from 'react-native-paper';
import colors from 'tailwindcss/colors';
import { StyleSheet } from 'react-native';

export interface FormFieldProps {
  control: Control;
  rules?: UseControllerProps<FieldValues>['rules'];
  name: string;
  error?: string;
  affixes?: AffixesProps;
  icons?: IconsProps;
  controllerProps?: ControllerProps;
}

interface IconsProps {
  left?: TextInputIconProps;
  right?: TextInputIconProps;
}

interface AffixesProps {
  left?: TextInputAffixProps;
  right?: TextInputAffixProps;
}

const FormField: FC<FormFieldProps> = ({
  control,
  rules,
  name,
  affixes,
  icons,
  error = '',
  controllerProps,
  ...props
}): ReactElement => (
  <>

    <Controller
      control={ control }
      rules={ rules }
      name={ name }
      render={({ field }) => {

        const { name, value, onBlur, onChange } = field;

        return (
          <TextInput
            className="h-16 z-0 bg-transparent"
            mode="outlined"
            name={ name }
            value={ value }
            onChangeText={ onChange }
            onBlur={ onBlur }
            activeOutlineColor={ colors.amber[600] }
            error={ !!error }
            left={
              (
                affixes?.left &&
                <TextInput.Affix
                  textStyle={ styles.TextInputItem }
                  { ...affixes.left }
                />
              ) ||
              (
                icons?.left &&
                <TextInput.Icon
                  style={ styles.TextInputItem }
                  { ...icons.left }
                />
              )
            }
            right={
              (
                affixes?.right &&
                <TextInput.Affix
                  textStyle={ styles.TextInputItem }
                  { ...affixes.right }
                />
              ) ||
              (
                icons?.right &&
                <TextInput.Icon
                  style={ styles.TextInputItem }
                  { ...icons.right }
                />
              )
            }
            { ...props }
          />
        )

      }}
      { ...controllerProps }
    />

    {
      !!error &&
      <HelperText type="error" className="mx-1">
        { error }
      </HelperText>
    }

  </>
);

const styles = StyleSheet.create({
  TextInputItem: { paddingTop: 7 }
});

export default FormField