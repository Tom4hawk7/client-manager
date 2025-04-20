import { redirect, useLoaderData } from 'react-router'
import ClientForm from '../components/form/ClientForm'
import TestClientForm from '../components/form/TestClientForm'
import Button from '../components/button/Button'
import ButtonLink from '../components/button/ButtonLink'
import { Cross1Icon, TrashIcon } from '@radix-ui/react-icons'

export default function EditClient() {
  const data = useLoaderData()
  return (
    <TestClientForm data={data}>
      <Button variant="blue" type="submit" name="intent" value="edit">
        Edit
      </Button>

      <Button type="submit" name="intent" value="delete" variant="red" size="42px">
        <TrashIcon width="20px" height="20px" />
      </Button>

      <ButtonLink content="icon" size="42px" to="..">
        <Cross1Icon width="20px" height="20px" />
      </ButtonLink>
    </TestClientForm>
  )
}

export const editClientLoader = async ({ params }) => {
  return await window.form.read(params.id)
}

export const editClientAction = async ({ request }) => {
  const formData = await request.formData()
  const intent = formData.get('intent')

  formData.delete('intent')

  switch (intent) {
    case 'edit':
      const data = Object.fromEntries(formData)
      window.form.update(data)
      return redirect('..')

    case 'delete':
      const id = formData.get('id')
      window.form.delete(id)
      return redirect('../..')
  }
}

// export const createClientAction = async ({ request }) => {
//     const data = Object.fromEntries(await request.formData())
//     await window.form.create(data)
//     return redirect('..')
//   }
