import  {  Schema, model, models } from 'mongoose'

const topicSchema = new Schema(
	{
		title: String,
		content: String
	}
)

const Topic = models.Topic || model('Topic', topicSchema)

export default Topic