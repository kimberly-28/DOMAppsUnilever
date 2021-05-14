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
                id       : 'employee',
                title    : 'Usuarios',
                type     : 'item',
                icon     : 'perm_identity', 
                url      : '/employee',
            }
        ]
    }
];
