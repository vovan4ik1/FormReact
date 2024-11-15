import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputField } from './components/InputField';
import { SelectField} from './components/SelectField';
import { CheckGroups } from './components/CheckGroups';
import styles from './components/Form.module.scss';


const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  activity: yup.string().required('Please select an activity'),
  skills: yup.array().of(yup.string()).min(1, 'At least one skill must be selected'),
});

interface FormData {
  name: string;
  email: string;
  activity: string;
  skills: string[];
}

export const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputField
        id="name"
        label="Name"
        register={register('name')}
        error={errors.name?.message}
      />
      <InputField
        id="email"
        label="Email"
        type="email"
        register={register('email')}
        error={errors.email?.message}
      />
      <SelectField
        id="activity"
        label="Activity"
        options={[
          { value: 'coding', label: 'Coding' },
          { value: 'testing', label: 'Testing' },
          { value: 'design', label: 'Design' },
        ]}
        register={register('activity')}
        error={errors.activity?.message}
      />
      <CheckGroups
        label="Tech Skills"
        options={[
          { value: 'React', label: 'React' },
          { value: 'Node.js', label: 'Node.js' },
          { value: 'Php', label: 'Php' },
          { value: 'Java', label: 'Java' },
          { value: 'CSS', label: 'CSS' },
        ]}
        register={register('skills')}
        error={errors.skills?.message}
      />
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

