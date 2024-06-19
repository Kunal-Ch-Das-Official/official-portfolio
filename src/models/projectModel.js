/* 
 Project Name: Kunal Chandra Das Official Portfolio,
 Author: Kunal Chandra Das,
 Description : this is the project model to access projects in client.
 Date : 20.06.2024 
 */
const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const Schema = Schema;

const ProjectSchema = new Schema(
    {
        projectName: {
            type: String,
            length: 50,
            unique: true,
            required: true
        },
        author: {
            type: String,
            length: 20,
            required: true
        },
        description: {
            type: String,
            length: 1000,
            required: true
        },
        projectThumbnail: {
            type: String,
            required: true,
            unique: true
        },
        projectUrl: {
            type: String,
            required: true,
            unique: true 
        },
        githubLink: {
            type: String,
            required: true,
            unique: true   
        },
        status: {
            type: Boolean,
            default: 1
        }
    }, {timestamps: true});

    const projectModel = mongoose.model('Projects', ProjectSchema);

    module.exports = projectModel;