import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'MÓDULOS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },
            {
                id       : 'agencies',
                title    : 'Agencias',
                type     : 'item',
                icon     : 'perm_identity', 
                url      : '/agencies',
            },
            {
                id       : 'employee',
                title    : 'Employee',
                type     : 'item',
                icon     : 'perm_identity', 
                url      : '/employee',
            }
        ]
    }
];
