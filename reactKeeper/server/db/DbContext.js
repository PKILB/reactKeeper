import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { KeepSchema } from '../models/Keep.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Keeps = mongoose.model('Keep', KeepSchema);
  
}

export const dbContext = new DbContext()
