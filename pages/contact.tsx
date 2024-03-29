import { useState } from 'react';
import { useForm } from '@formspree/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import { MobileMTopWrapper, PageTitle } from '@/constants/basic.styles';
import {
  ErrorMessage,
  ContactFormWrapper,
  Socials,
  SocialIcon,
} from '@/components/contact/contact.styles';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

interface IFormik {
  email: string;
  message: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`
  );
  const formik = useFormik<IFormik>({
    initialValues: {
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('An email address is required.'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters long.')
        .max(1000, 'Message must be less than 1000 characters long.')
        .required('A message is required.'),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <Head>
        <title>Contact | Andreas Wolff</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life, Music Production'
        />
      </Head>
      <MobileMTopWrapper>
        <ContactFormWrapper>
          <PageTitle>Let's talk!</PageTitle>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor='email'>Your email address</label>
            <input id='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}

            <label htmlFor='message'>Your message</label>
            <textarea
              id='message'
              rows={7}
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message ? (
              <ErrorMessage>{formik.errors.message}</ErrorMessage>
            ) : null}

            <button id='submitbtn' type='submit' disabled={state.submitting}>
              {state.succeeded === false ? 'SEND MESSAGE' : 'MESSAGE SENT!'}
            </button>
          </form>

          <Socials>
            <a
              href='https://twitter.com/andreastoux'
              target='_blank'
              rel='noreferrer'
            >
              <SocialIcon>
                <FaTwitter size={20} />
              </SocialIcon>
              Twitter
            </a>
            <a
              href='https://www.linkedin.com/in/andreaswolff96/'
              target='_blank'
              rel='noreferrer'
            >
              <SocialIcon>
                <FaLinkedin size={20} />
              </SocialIcon>
              LinkedIn
            </a>
            <a href='https://github.com/t0ux' target='_blank' rel='noreferrer'>
              <SocialIcon>
                <FaGithub size={20} />
              </SocialIcon>
              Github
            </a>
          </Socials>
        </ContactFormWrapper>
      </MobileMTopWrapper>
    </>
  );
};

export default Contact;
