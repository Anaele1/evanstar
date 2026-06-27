import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
    // Custoner details
    customerName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    // Service details
    serviceType: {type: String, required: true},
    serviceName: {type: String, required: true},
    description: {type: String},
    serviceImage: {type: String, required: true},
    
},{timestamps: true});

export default mongoose.model('Myservices', serviceSchema);