import * as express from 'express';
const router = express.Router()
import { getAllUsers, getUserName }from '../controllers/userController';

router.get('/', (req, res) => {
  const users = getAllUsers()
  res.json(users)
})

router.get(`/:userID/username/`, (req, res) => {
  const userName = getUserName((req.params as {
    userID: string
  }).userID)
  res.send(userName)
});

export = router;
