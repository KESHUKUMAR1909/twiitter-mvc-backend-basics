import express from 'express';
const commentRouter =express.Router(); //Create a router object
commentRouter.get('/',(req, res)=>{
    return res.json({
        message:'Welcome to the comments Route'
    });
});
commentRouter.get('/:id',(req, res)=>{
    return res.json({
        id:req.params.id,
        message:"Welcome to the comments Route"
    })
})

export default commentRouter;