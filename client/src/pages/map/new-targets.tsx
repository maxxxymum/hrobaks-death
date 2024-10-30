import { useMemo } from 'react';
import { Box, Flex, Heading, Card, Text, Separator } from '@radix-ui/themes';
import { useNewTargets } from '../../hooks/use-new-targets';

export const NewTargets = () => {
    const newTargets = useNewTargets();
    const reversedTargets = useMemo(() => newTargets.slice().reverse(), [newTargets]);

    return <Flex direction={'column'} width={'400px'} gap={'4'} pt={'4'}>
        <Heading align={'center'} as='h3'>Feed</Heading>
        <Box width={'100%'} flexGrow={'1'} overflow={'scroll'}>
            {reversedTargets.map((target) => {
                return (
                    <Box py='2' px={'3'}>
                        <Card>
                            <Flex direction={'column'}>
                                <Text color={'tomato'}>New Hrobak</Text>
                                <Separator size={'4'} />
                                <Text>{`Distance: ${target.distance} km`}</Text>
                                <Text>{`Latitude: ${target.lat}`}</Text>
                                <Text>{`Longitude: ${target.lng}`}</Text>
                                <Text>{`ID: ${target.id}`}</Text>
                            </Flex>
                        </Card>
                    </Box>
                )
            })}
        </Box>
    </Flex>
}