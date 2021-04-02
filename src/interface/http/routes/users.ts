import { Router } from 'express'

import createUserController from '../controller/users/createUserController'
import deleteUserController from '../controller/users/deleteUserController'
import getUserController from '../controller/users/getUserController'
import indexUsersController from '../controller/users/indexUsersController'
import updateUserController from '../controller/users/updateUserController'

const router = Router()

router.post('/', createUserController)
router.get('/', indexUsersController)
router.get('/:id', getUserController)
router.patch('/:id', updateUserController)
router.delete('/:id', deleteUserController)

export default router
