import {
  arrayOf,
  shape,
  number,
  string,
  func,
  bool,
} from 'prop-types';

const userShape = shape({
  id: number,
  first_name: string,
  last_name: string,
  avatar: string
})

export const UserRowProps = {
  user: userShape
}

export const UsersTableProps = {
  users: arrayOf(userShape),
  isLoading: bool,
  loadUsers: func
}