import { useContext } from 'react';
import { TargetsContext } from '../context/targets';

export const useTargets = () => {
    const targets = useContext(TargetsContext);

    if (!targets) {
        throw new Error('useTargets must be used within a TargetsProvider');
    }

    return targets;
}