/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : This is controller of the project post request by client.
 Date : 20.06.2024 
 */

const projectModel = require("../../models/projectModel");

const uploadProjectHandler = async(req, res) => {

  try {
    const toBePost = new projectModel({
        projectName: req.body.projectName,
        author: req.body.author,
        description: req.body.description,
        projectThumbnail: req.body.projectThumbnail,
        projectUrl: req.body.projectUrl,
        githubLink: req.body.githubLink
    });

    await toBePost.save();
    res.status(200).send("Successful!!!");

  } catch (error) {
    console.log("Some error occured!!!");
    res.status(400).send('Bad Request!');
  }


}

module.exports = uploadProjectHandler;