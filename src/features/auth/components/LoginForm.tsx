import { InputField, PasswordInputField } from 'components/FormFields';
import { LoginInformation } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export interface LoginFormProps {
  initialValue: LoginInformation;
  onSubmit: (formValues: LoginInformation) => void;
}

export default function LoginForm({ initialValue, onSubmit }: LoginFormProps) {
  const { t } = useTranslation();

  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  return (
    <>
      <div>
        <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__form-group">
            <span className="form__form-group-label">Email</span>
            <div className="form__form-group-field">
              <InputField name="email" control={control} />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <PasswordInputField name="password" control={control} />
            </div>
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
