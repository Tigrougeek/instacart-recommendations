import { useState, useEffect } from 'react';

const useResources = resource =>
    fetch(resource)
        .then(response => response.json());

export default useResources;
