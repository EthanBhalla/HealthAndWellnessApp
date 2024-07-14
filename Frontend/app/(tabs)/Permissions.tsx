import React, { useEffect } from 'react';
// Importing React and the useEffect hook from the 'react' library.

import { PermissionsAndroid } from 'react-native';
// Importing PermissionsAndroid from 'react-native' for handling Android permissions.

import * as permissions from 'react-native-permissions';
// Importing all exports from 'react-native-permissions' as 'permissions'.

import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
// Importing specific functions and constants from 'react-native-permissions'.

const Permissions = () => {
    // Defining a functional component named 'Permissions'.

    useEffect(() => {
        // Using the useEffect hook to run code after the component mounts.

        const requestPermissions = async () => {
            // Defining an asynchronous function to request permissions.

            const cameraPermission = await permissions.check(PERMISSIONS.ANDROID.CAMERA);
            // Checking the current status of the camera permission.

            const storagePermission = await permissions.check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
            // Checking the current status of the storage permission.

            if (cameraPermission === RESULTS.DENIED) {
                // If the camera permission is denied...

                await permissions.request(PERMISSIONS.ANDROID.CAMERA);
                // ...request the camera permission.
            }

            if (storagePermission === RESULTS.DENIED) {
                // If the storage permission is denied...

                await permissions.request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
                // ...request the storage permission.
            }
        };

        requestPermissions();
        // Calling the requestPermissions function to check and request permissions.

    }, []);
    // The empty dependency array ensures this effect runs only once after the component mounts.

    return null;
    // The component returns null, meaning it doesn't render any UI.
};

export default Permissions;
// Exporting the Permissions component as the default export.