import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "@/components/Home"
import Login from '@/components/Login'
import Description from '@/components/Description'
import Navigator from '@/components/navigator'
import Service from "@/components/Service"
import Cluster from "@/components/Cluster"
import Job from '@/components/Job'
import Project from "@/components/Project"
import ProjectMain from "@/components/ProjectMain"
import Account from "@/components/Account";
import AccountInfo from "@/components/AccountInfo";
import AwsOverview from "@/components/AwsOverview";
import AliyunOverview from "@/components/AliyunOverview";
import KnativeOverview from "@/components/KnativeOverview";

const routes = [
    {
        path: '/',
        name: 'Login',
        components: {
            right: Login,
            left: Description
        }
    },
    {
        path: '/home',
        name: 'Home',
        components: {
            right: Home,
            left: Navigator
        }
    },
    {
        path: '/accounts',
        name: 'Accounts',
        components: {
            right: Account,
            left: Navigator
        }
    },
    {
        path: '/account-info',
        name: 'AccountInfo',
        components: {
            right: AccountInfo,
            left: Navigator
        }
    },
    {
        path: '/clusters',
        name: 'Clusters',
        components: {
            right: Cluster,
            left: Navigator
        }
    },
    {
        path: '/Jobs',
        name: 'Jobs',
        components: {
            right: Job,
            left: Navigator
        }
    },
    {
        path: '/services',
        name: 'Services',
        components: {
            right: Service,
            left: Navigator
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        components: {
            right: ProjectMain,
            left: Navigator
        }
    },
    {
        path: '/project-info',
        name: 'ProjectInfo',
        components: {
            right: Project,
            left: Navigator
        }
    },
    {
        path: '/aws-overview',
        name: 'AWS Overview',
        components: {
            right: AwsOverview,
            left: Navigator
        }
    },
    {
        path: '/aliyun-overview',
        name: 'Aliyun Overview',
        components: {
            right: AliyunOverview,
            left: Navigator
        }
    },
    {
        path: '/knative-overview',
        name: 'KNative Overview',
        components: {
            right: KnativeOverview,
            left: Navigator
        }
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes
    }
)

export default router