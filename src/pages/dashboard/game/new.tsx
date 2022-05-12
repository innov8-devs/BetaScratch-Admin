import { Field, Form, Formik, getIn } from 'formik'
import { InputField } from '../../../components/custom/InputField'
import * as yup from 'yup'
import {
  FindAllGamesPaginatedDocument,
  useCreateGameMutation,
  useFindAllGameCategoriesQuery,
} from '../../../generated/graphql'
import { generateRandomString } from '../../../helpers/generateUniqueString'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect, useState } from 'react'
import { CustomSelect } from '../../../components/custom/CustomSelect'
import { uploadImage } from '../../../helpers/uploadImage'
import { useRouter } from 'next/router'
import { SERVER_URI_UPLOAD } from '../../../constants'

const validationSchema = yup.object({
  name: yup.string().required('name is required'),
  availability: yup
    .number()
    .typeError('availability must be a number')
    .positive('availability must be greater than zero')
    .required('availability is required'),
  category: yup.string().required('category is required'),
  priceNgn: yup
    .number()
    .typeError('price must be a number')
    .positive('price must be greater than zero')
    .required('price is required'),
  priceUsd: yup
    .number()
    .typeError('price must be a number')
    .positive('price must be greater than zero')
    .required('price is required'),
  priceGbp: yup
    .number()
    .typeError('price must be a number')
    .positive('price must be greater than zero')
    .required('price is required'),
  priceEur: yup
    .number()
    .typeError('price must be a number')
    .positive('price must be greater than zero')
    .required('price is required'),
  description: yup.string().required('description is required'),
})

const CreateGame = () => {
  const router = useRouter()
  const [createGame] = useCreateGameMutation({
    refetchQueries: [{ query: FindAllGamesPaginatedDocument }],
  })
  const { data: gameCategories } = useFindAllGameCategoriesQuery()

  const [files, setFiles] = useState([])

  interface SelectOptionsInterface {
    label: string
    value: string
  }

  const gameCategoryOptions: SelectOptionsInterface[] = []

  gameCategories?.findAllGameCategories?.map((category) => {
    gameCategoryOptions.push({
      label: category.categoryLabel,
      value: category.categoryName,
    })
  })

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }, [])

  const thumbs = files.map((file: any) => (
    <div
      key={file.name}
      className="relative overflow-hidden bg-gray-500 bg-cover h-52 w-52 bg-clip-border"
    >
      <div>
        <img src={file.preview} alt="profile image" className="w-full h-full" />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="p-7">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-5 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Game Information
              </h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-4 md:mt-0">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <div
                    className="flex text-sm text-gray-600"
                    {...getRootProps()}
                  >
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium text-green-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                    >
                      <input
                        {...getInputProps()}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">
                      <span className="text-green-800 cursor-pointer">
                        Upload file
                      </span>
                      , or drag and drop
                    </p>
                  </div>

                  {thumbs}
                </div>
              </div>
            </div>

            <Formik
              validateOnChange={true}
              validationSchema={validationSchema}
              initialValues={{
                name: '',
                availability: '',
                category: '',
                priceNgn: '',
                priceUsd: '',
                priceEur: '',
                priceGbp: '',
                description: '',
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true)
                let prices = {
                  usd: values.priceUsd,
                  ngn: values.priceNgn,
                  eur: values.priceEur,
                  gbp: values.priceGbp,
                }
                try {
                  const imageUrl: any = await uploadImage(files)
                  if (imageUrl) {
                    await createGame({
                      variables: {
                        ...values,
                        gameId: generateRandomString(),
                        price: prices,
                        imageUrl: `${SERVER_URI_UPLOAD}/${imageUrl}`,
                        availability: Number(values.availability),
                      },
                    })
                    router.push('/dashboard/game')
                  } else {
                    alert('upload failed!')
                  }
                } catch (err) {
                  console.error(err)
                }
                setSubmitting(false)
              }}
            >
              {({ isSubmitting, errors }) => (
                <Form>
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                          <div>
                            <InputField
                              name="name"
                              placeholder="Name"
                              label="Name Of Game"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-span-6">
                          <InputField
                            name="availability"
                            placeholder="Availability"
                            label="Availability"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6">
                          <Field
                            className="custom-select"
                            name="category"
                            options={gameCategoryOptions}
                            component={CustomSelect}
                            placeholder="Game category"
                            isMulti={false}
                            formLabel="Category"
                            onChan
                          />
                          {errors.category ? (
                            <small className="text-red-600">
                              {errors.category}
                            </small>
                          ) : null}
                        </div>

                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                          <InputField
                            name="priceNgn"
                            placeholder="Sale Price (NGN)"
                            label="Sale Price (NGN)"
                            type="text"
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                          <InputField
                            name="priceUsd"
                            placeholder="Sale Price (USD)"
                            label="Sale Price (USD)"
                            type="text"
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                          <InputField
                            name="priceEur"
                            placeholder="Sale Price (EUR)"
                            label="Sale Price (EUR)"
                            type="text"
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                          <InputField
                            name="priceGbp"
                            placeholder="Sale Price (GBP)"
                            label="Sale Price (GBP)"
                            type="text"
                          />
                        </div>

                        <div className="col-span-12">
                          <InputField
                            name="description"
                            placeholder="Short description on the game."
                            label="Description"
                            textarea
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-800 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        {isSubmitting ? (
                          <span className="mr-3 loader"></span>
                        ) : (
                          <>
                            <span className="flex items-center space-x-1">
                              <span>Save</span>
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGame
