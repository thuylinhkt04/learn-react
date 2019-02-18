import {
  shape,
  number,
  string,
  func,
} from 'prop-types';

const userShape = shape({
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
})

export const UserDetailProps = {
  user: userShape,
  loadUser: func
}

