import { LockClosedIcon } from '@heroicons/react/solid'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import { useState } from 'react'
import USER from '../var/user'
import { ROLE } from '../types/enum'
import { MeDocument, useAdminLoginMutation } from '../generated/graphql'
import { persistStorage } from '../utils/storage.util'
import { toErrorMap } from '../helpers/setErrorToMap'
import { InputField } from '../components/custom/InputField'

const validationSchema = Yup.object({
  phoneNumberOrEmail: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
})

const Login = () => {
  const router = useRouter()
  const [loginError, setLoginError] = useState('')

  const [login] = useAdminLoginMutation({
    refetchQueries: [{ query: MeDocument }],
  })

  return (
    <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-2">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src="/images/logo_6.png"
            alt="BetaScratch Logo"
          />
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>
        <div>
          <Formik
            validateOnChange={true}
            validationSchema={validationSchema}
            initialValues={{
              phoneNumberOrEmail: '',
              password: '',
            }}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setSubmitting(true)
              try {
                const response = await login({
                  variables: {
                    ...values,
                  },
                })
                const user = response.data?.adminLogin
                persistStorage('user', user)
                USER(user)
                let currUser = USER(user)
                if (currUser.role === ROLE.ADMIN) router.replace('/')
                else alert('Invalid')
              } catch (err: any) {
                // HANDLE ERROR MESAGES
                let errorMessages = err.graphQLErrors[0].message
                if (
                  errorMessages.indexOf('invalid credentials') !== -1 ||
                  errorMessages.indexOf('confirm your account') !== -1
                ) {
                  setLoginError(errorMessages[0])
                } else setErrors(toErrorMap(errorMessages))
              }
              setSubmitting(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mt-8 space-y-4">
                  <div className="space-y-1 rounded-md shadow-sm">
                    <div>
                      <InputField
                        name="phoneNumberOrEmail"
                        placeholder="Email"
                        label="Email"
                        type="text"
                      />
                    </div>
                    <div>
                      <InputField
                        name="password"
                        placeholder="Password"
                        label="Password"
                        type="password"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-800 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      <span className="flex items-center space-x-1">
                        {isSubmitting ? (
                          <span className="loader mr-3"></span>
                        ) : (
                          <>
                            <LockClosedIcon
                              className="h-4 w-4 group-hover:text-green-400"
                              aria-hidden="true"
                            />
                            <span className="flex items-center space-x-1">
                              <span>Login</span>
                            </span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
