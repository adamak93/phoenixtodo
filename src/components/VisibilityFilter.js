import { Container , Tab, TabList, Tabs} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { VISIBILITY_FILTER } from "../constants";
import { setFilter } from "../redux/actions";

export const VisibilityFilter = () => {
    const dispatch = useDispatch();

    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                   {Object.keys(VISIBILITY_FILTER).map(filterKey => {
                    const currentFilter = VISIBILITY_FILTER[filterKey];
                    return (
                        <Tab
                        key = {`visibility-filter-${currentFilter}`}
                        onClick = {() => dispatch(setFilter(currentFilter)) }
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
