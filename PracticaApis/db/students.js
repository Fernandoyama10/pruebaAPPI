const db = require('../tools/postgres');

class Student{
    async getAll(){
        try{
            const students = await db.query('select * from public.student');
            return students.rows
        }catch(e){
            throw e;
        }
    }
}

module.exports = {Student};