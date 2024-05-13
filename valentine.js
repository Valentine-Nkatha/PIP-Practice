class Doctor{
    constructor(name,department,availability){
        this.name=name
        this.department=department
        this.availability=availability

    }
    isAvailable(timeslot){
        return this.availability.includes(timeslot)
    }
}
class Patient{
    constructor(name,prefferedLocation){
        this.name=name
        this.preferredLocation=prefferedLocation
    }

}
class Appointment{
    constructor(patient,doctor,time){
        this.patient=patient
        this.doctor=doctor
        this.time=time
    }
}
class Schedule{
    constructor(){
        this.doctors=[]
        this.patients=[]
        this.appointments=[]
    }
    addDoctor(doctor){
        this.doctors.push(doctor)
    }

    addPatient(patient){
        this.patients.push(patient)
    }
    scheduleAppointment(patient,doctor,time){
        if(doctor.isAvailable(time)){
            const appointment=new Appointment(patient,doctor,time)
            this.appointments.push(appointment)
            console.log(`${patient.name} your appointment with ${doctor.name} will be at ${time}`)
        }else{
            console.log(`${doctor.name} is not available`)
        }
    }
}
const scheduling=new Schedule()
scheduling.addDoctor(new Doctor("John","Surgeon",["10.00","11.00"]))
scheduling.addPatient(new Patient("Eve","Surgeon"))

scheduling.scheduleAppointment(scheduling.patients[0],scheduling.doctors[0],"10.00")