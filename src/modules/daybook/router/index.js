
export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layouts/DaybookLayout'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/EntryView'),
        }
    ]
}