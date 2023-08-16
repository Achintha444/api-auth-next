import { FeatureConfig } from "@/feature_config/featureConfig";
import { NavBarItem, ProfileItem } from "../../models/navBar";

export const navBarItems: NavBarItem[] = [
    {
        key: 'getting_started',
        name: 'Getting Started',
        description: 'This is the getting started page',
        icon: 'Home',
        requiredScopes: [],
        path: '/getting_started'
    },
    {
        key: 'view_issues',
        name: 'View Issues',
        description: 'View all the issues',
        icon: 'InsertDriveFile',
        requiredScopes: FeatureConfig.features.issue.view,
        path: '/view_issues'
    },
    {
        key: 'create_issue',
        name: 'Create Issue',
        description: 'Create a new issue',
        icon: 'NoteAdd',
        requiredScopes: FeatureConfig.features.issue.create,
        path: '/create_issue'
    }
];

export const profileItems: ProfileItem[] = [ 
    {
        key: 'sign_out',
        name: 'Sign Out'
    }
];
