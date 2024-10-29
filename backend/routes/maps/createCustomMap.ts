import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { Map } from '@backend/models'
import { collections, getUserId, throwError } from '@backend/utils'

const createCustomMap = async (req: NextApiRequest, res: NextApiResponse) => {
  const creatorId = await getUserId(req, res)
  const { name, description, avatar } = req.body

  if (!name) {
    return throwError(res, 400, 'A map name is required')
  }

  const newMap = {
    name,
    description,
    previewImg: avatar || 'https://wallpaperaccess.com/full/2707446.jpg',
    creator: new ObjectId(creatorId),
    createdAt: new Date(),
    isPublished: false,
    avgScore: 0,
    locationCount: 0,
    usersPlayed: 0,
  } as Map

  const result = await collections.maps?.insertOne(newMap)

  if (!result) {
    return throwError(res, 500, 'Failed to create map, please try again later')
  }

  res.status(201).send({
    mapId: result.insertedId,
    message: 'Successfully created map',
  })
}

export default createCustomMap
