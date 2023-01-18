import { comments } from "@/data";

export default function handler(req,res){


    if (req.method === 'GET') {
        res.json(comments)
    } else if (req.method === 'POST') {
        console.log(req.body);
        const data = {
            id:Date.now(),
            name:req.body.name,
            item:req.body.item,
            comment:req.body.comment
        }
        comments.push(data)
    } else if (req.method === 'DELETE') {
        console.log(req.query);
        const index = comments.findIndex((comment)=>
            comment.id == req.query.id
        ) 
        comments.splice(index, 1)
        res.json(comments)
    }
}