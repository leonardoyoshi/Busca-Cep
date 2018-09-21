import { isEmpty } from 'lodash'

export const path = ({ path }) => path

export const routeLogin = ({ path }) => path.path.indexOf('/login') !== -1

export const isToken = () => !isEmpty(localStorage.getItem('token'))

export const getToken = () => localStorage.getItem('token')
