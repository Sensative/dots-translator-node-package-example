const args = require('minimist')(process.argv.slice(2), { string: ['_'] });

let radarApp = args._[0];

if (radarApp) {
    let output = '';

    switch (parseInt(radarApp)) {
        case 3:
            if (args._.length === 5) {
                let measurementCycle = args._[1];
                let startRange = args._[2];
                let endRange = args._[3];
                let sensitivityLevel = args._[4];

                if (measurementCycle === 's'){
                    measurementCycle = ''
                }
                if (startRange === 's'){
                    startRange = ''
                }
                if (endRange === 's'){
                    endRange = ''
                }
                if (sensitivityLevel === 's'){
                    sensitivityLevel = ''
                }

                let resultString = `${radarApp}:${measurementCycle},,${startRange},${endRange},,${sensitivityLevel}`;
                console.log(resultString);

                for (let i = 0; i < resultString.length; i++) {
                    output += resultString.charCodeAt(i).toString(16); // Convert to hex
                };
            } else {
                console.error('Invalid number of arguments for radarApp 3. (Any argument == s skips it and leaves it to whatever it was previously configured to)\n    Argument 1 = Measurement Cycle (seconds)\n    Argument 2 = Start Range (Meters, decimal denoted with period)\n    Argument 3 = End Range (Meters, decimal denoted with period)\n    Argument 4 = Sensitivity level (0-1, decimal denoted with period)\nExample: node RadarConfigurator.js 3 300 0.5 5 0.65');
            }
            break;

        case 4:
            if (args._.length === 5) {
                let measurementCycle = args._[1];
                let startRange = args._[2];
                let endRange = args._[3];
                let thresholdLevel = args._[4];
                
                if (measurementCycle === 's'){
                    measurementCycle = ''
                }
                if (startRange === 's'){
                    startRange = ''
                }
                if (endRange === 's'){
                    endRange = ''
                }
                if (thresholdLevel === 's'){
                    thresholdLevel = ''
                }

                let resultString = `${radarApp}:${measurementCycle},,${startRange},${endRange},${thresholdLevel}`;
                console.log(resultString);
                    
                for (let i = 0; i < resultString.length; i++) {
                    output += resultString.charCodeAt(i).toString(16); // Convert to hex
                }
            } else {
                console.error('Invalid number of arguments for radarApp 4. (Any argument == s skips it and leaves it to whatever it was previously configured to)\n    Argument 1 = Measurement Cycle (seconds)\n    Argument 2 = Start Range (Meters, decimal denoted with period)\n    Argument 3 = End Range (Meters, decimal denoted with period)\n    Argument 4 = Threshold level (Lowest amplitude required for detection)\nExample: node RadarConfigurator.js 4 300 0.5 5 250');
            }
            break;
        case 5:
            if (args._.length === 4) {
                let measurementCycle = args._[1];
                let startRange = args._[2];
                let endRange = args._[3];

                if (measurementCycle === 's'){
                    measurementCycle = ''
                }
                if (startRange === 's'){
                    startRange = ''
                }
                if (endRange === 's'){
                    endRange = ''
                }

                let resultString = `${radarApp}:${measurementCycle},,${startRange},${endRange}`;
                console.log(resultString);

                for (let i = 0; i < resultString.length; i++) {
                    output += resultString.charCodeAt(i).toString(16); // Convert to hex
                }
            } else {
                console.error('Invalid number of arguments for radarApp 5. (Any argument == s skips it and leaves it to whatever it was previously configured to)\n    Argument 1 = Measurement Cycle (seconds)\n    Argument 2 = Start Range (Meters, decimal denoted with period)\n    Argument 3 = End Range (Meters, decimal denoted with period)\nExample: node RadarConfigurator.js 5 300 0,5 5');
            }
            break;

        case 6:
            if (args._.length === 5) {
                let measurementCycle = args._[1];
                let startRange = args._[2];
                let endRange = args._[3];
                let thresholdLevel = args._[4];

                if (measurementCycle === 's'){
                    measurementCycle = ''
                }
                if (startRange === 's'){
                    startRange = ''
                }
                if (endRange === 's'){
                    endRange = ''
                }
                if (thresholdLevel === 's'){
                    thresholdLevel = ''
                }

                let resultString = `${radarApp}:${measurementCycle},,${startRange},${endRange},${thresholdLevel}`;
                console.log(resultString);

                for (let i = 0; i < resultString.length; i++) {
                    output += resultString.charCodeAt(i).toString(16); // Convert to hex
                }
            } else {
                console.error('Invalid number of arguments for radarApp 6. (Any argument == s skips it and leaves it to whatever it was previously configured to)\n    Argument 1 = Measurement Cycle (seconds)\n    Argument 2 = Start Range (Meters, decimal denoted with period)\n    Argument 3 = End Range (Meters, decimal denoted with period)\n    Argument 4 = Threshold level (Lowest amplitude required for detection)\nExample: node RadarConfigurator.js 6 300 0.5 5 250');
            }
            break;



        default:
            if (radarApp === 'sys') {
                if (args._.length === 3) {
                    let appSelect = args._[1];
                    let radarOn = args._[2];

                    if (appSelect === 's'){
                        appSelect = ''
                    }
                    if (radarOn === 's'){
                        radarOn = ''
                    }

                    let resultString = `${radarApp}:${appSelect},,,,,${radarOn}`;
                    console.log(resultString);
    
                    for (let i = 0; i < resultString.length; i++) {
                        output += resultString.charCodeAt(i).toString(16); // Convert to hex
                    }
                    } else {
                        console.error('Invalid number of arguments for radarApp sys. (Any argument == s skips it and leaves it to whatever it was previously configured to)\n    Argument 1 = Active app (3-6)\n        3 = Well\n        4 = Bin\n        5 = Parking\n        6 = Seating\n    Argument 2 = Radar Off/On (0 = Off, 1 = On)');
                    }
            } else {
                console.error('Invalid radarApp value. First argument needs to be one of the following:\n    sys = System settings\n    3 = Well\n    4 = Bin\n    5 = Parking\n    6 = Seating\nExample: node RadarConfigurator.js sys');
            }
            break;
    }

    if (output) {
        console.log('Hex downlink:', output, '\nSend hex downlink over LoRa on port 48');
    }
} else {
    console.error('Please provide a radarApp value.  First argument needs to be one of the following:\n    sys = System settings\n    3 = Well\n    4 = Bin\n    5 = Parking\n    6 = Seating\nExample: node RadarConfigurator.js sys');
}
