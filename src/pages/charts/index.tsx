import React from 'react';
import { useGetDiseases } from '../../hooks/useGetDiseases';
import { useGetDiseasesCountry } from '../../hooks/useGetDiseasesCountry';
import { Leaflet } from '../../components/organisms/leaflet';
import { ScreenContainer } from '../../components/molecules/ScreenContainer';
import { SubHeading } from '../../components/atoms/subheading';
import { LineChart } from '../../components/organisms/line';

export const Charts = () => {
    const { data: DiseaseData, refetch: refetchDisease, isLoading: diseaseLoading } = useGetDiseases();
    const { data: DiseaseDataCountry, refetch: refetchDiseaseCountry, isLoading: diseaseLoadingCountry } = useGetDiseasesCountry();
    
    return (
        <ScreenContainer>
            <SubHeading text='Covid Cases Fluctuations' />
            <LineChart />
            <SubHeading text='Covid Cases by Countries' />
            <Leaflet data={DiseaseDataCountry} isLoading={diseaseLoadingCountry} />
        </ScreenContainer>
    );
}
