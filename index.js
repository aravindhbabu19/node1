const {format}=require('date-fns')
const {v4:uuid}=require('uuid')
const date=format(Date(),'dd-MM-yyyy \t HH:mm:ss')
console.log(date)

console.log(uuid())

