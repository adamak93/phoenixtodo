import { Container , Tab, TabList, Tabs} from "@chakra-ui/react";
import { object } from 'prop-types';
import { VISIBILITY_FILTER } from "../constants";

export const VisibilityFilter = () => {
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                   {Object.keys(VISIBILITY_FILTER).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTER[filterKey];
                    return (
                        <Tab
                        key = {`visibility-filter-${currentFilter}`}
                        >
                        {currentFilter}
                        </Tab>
                    )
                    })}
                </TabList>
            </Tabs>
        </Container>
    )
}
