const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type COMP {
        cpu: CPU
        system: System
    }

    type CPU {
        time: String
        Percent_DPC_Time: Float
        Percent_Idle_Time: Float
        Percent_Interrupt_Time: Float
        Percent_Processor_Time: Float
        Percent_User_Time: Float
        host: String
        instance: String
        objectname: String
    }

    type System {
        time: String
        Context_Switches_persec: Float
        Processor_Queue_Length: Float
        System_Calls_persec: Float
        System_Up_Time: Float
        host: String
        objectName: String
    }


    type Query {
        getCPU: [CPU]
        getSystem: [System]

    }
`);

module.exports = schema;