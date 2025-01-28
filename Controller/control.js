
const Project = require('../model/model')

const AddProject =  async (req,res)=>{
    try{
        const AddedProject = req.body
        const newProject = await Project.create(AddedProject);
        
            res.status(201).json({
              success: true,
              message: "Project added successfully",
              data: newProject,
            });
          
         



    }
    catch (e) {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Something went wrong! Please try again",
        });
      }

}
const getAllProjects = async (req,res) => {
    try {
      const allProjects = await Project.find({});
      console.log(allProjects)
      if (allProjects?.length > 0) {
        res.status(200).json({
          success: true,
          message: "Projects fetched successfully",
          data: allProjects,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No found in collection",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  };

const getProject = async (req,res)=>{

    try {
        const findID = parseInt(req.params.id, 10)
        console.log(findID)
    const projectByID = await Project.findOne({ id: findID });
    


    
    if (!projectByID) {
        return res.status(404).json({
          success: false,
          message:
            "Project with the current ID is not found! Please try with a different ID",
        });
      }
  
      res.status(200).json({
        success: true,
        data: projectByID,
      });
  
    }
    catch(e){
        console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
    }


}
const updateProject = async (req, res) => {
    try {
      const updatedProjectByID = req.body;
      const findID = parseInt(req.params.id, 10)

      const updatedProject = await Project.findOneAndUpdate(
        { id: findID }, // Custom ID instead of MongoDB _id
        { $set: updatedProjectByID },
        { new: true }
      )
  
      if (!updatedProject) {
        res.status(404).json({
          success: false,
          message: "Project is not found with this ID",
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Project updated successfully",
        data: updatedProject,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  };



  const deleteProject = async (req, res) => {
    try {
      const getCurrentProjectID = req.params.id;
      const deletedProject = await Project.findOneAndDelete({ id: getCurrentProjectID });
  
      if (!deletedProject) {
        res.status(404).json({
          success: false,
          message: "Project is not found with this ID",
        });
      }
  
      res.status(200).json({
        success: true,
        data: deletedProject,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  };

  module.exports = {
    AddProject,deleteProject,getProject,updateProject,getAllProjects
  }
  