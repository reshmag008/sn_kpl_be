const models = require('../models');
const { Op,Sequelize } = require("sequelize");
const AWS = require('aws-sdk');
const playerService = require('./player')
const s3Service = require('./s3Service');



async function validateLeagueOwnerLogin(params){
    return new Promise(async (resolve, reject) => {
        try {

            const owner = await models.league_owners.findOne({
                where: {
                    id :  params.id,
                    username : params.username,
                    password : params.password,
                    deletedAt: null
                }
            });

            if (!owner) {
                return resolve({
                    success: false,
                    message: "Invalid username or password."
                });
            }

            resolve({
                success: true,
                message: "Login successful.",
                data: owner
            });
            
        }catch(e){
            console.log("error occured in getTeams= ", e);
            reject(e);
        }
    })
}










module.exports = {
    validateLeagueOwnerLogin : validateLeagueOwnerLogin

}