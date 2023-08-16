import { Utils } from '@/utils/common/functions/utils';
import { NavBarItem } from '@/utils/common/models/navBar';
import { icons } from '@/utils/theme/icons';
import { Button, SvgIconTypeMap } from '@/utils/theme/muiLib';
import { navBarItems } from '../navBarItems';
import { OverridableComponent } from '@mui/material/OverridableComponent';


export interface NavBarItemsProps {
    allowedScopes: string[];
}

export default function NavBarItems(props: NavBarItemsProps): React.ReactNode {

    const { allowedScopes } = props;

    return (
        navBarItems.map((navBarItem: NavBarItem) => {
            const Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> = icons[navBarItem.icon];
            return Utils.hasRequiredScopes(allowedScopes, navBarItem.requiredScopes) &&
                (
                    <Button
                        key={navBarItem.key}
                        color='secondary'
                        href={navBarItem.path}
                        startIcon={<Icon />}
                    >
                        {navBarItem.name}
                    </Button>
                )
        }
        )
    );
}
