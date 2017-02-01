import { Schema } from 'mongoose'
import { emailRegex } from 'helpers'

// http://mongoosejs.com//docs/guide.html#options
const schemaOpts = {
  timestamps: true
}

const UserSchema = new Schema({
  email: {
    type: String,
    match: emailRegex,
    unique: true,
    lowercase: true
  }
}, schemaOpts)

export default UserSchema
