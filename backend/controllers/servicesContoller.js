import serviceModel from "../models/servicesModel.js"

export const bookServices = async (req, res) => {
   const service = req.body;
   try {
      if (!service.customerName || !service.email || !service.phone) {
         return res.status(400).json({ success: false, message: 'All field required' })
      }

      const newUser = new serviceModel(service)
      await newUser.save();
      
      return res.status(201).json({ success: true, message: `${service.serviceName} booked from ${service.serviceType}category` })
   } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: `Server Error` })
   }
}

export const cancelBookedService = async (req, res) => {
   const { id } = req.params

   try {
      await serviceModel.findByIdAndDelete(id)
      return res.status(201).json({ success: true, message: 'Service deleted' })
   } catch (error) {
      console.log(error)
      res.status(400).json({ success: false, message: 'Server error' })
   }
}
