import React from 'react';
import {
    Container, Heading,
    MainAccordion, MainAccordionDetails,
    MainAccordionSummary,
    SmallAccordion,
    SmallAccordionDetails,
    SmallAccordionSummary
} from './styles';
import { Database } from 'components/iconsButtons/navigation/database';
import { Image } from 'components/iconsButtons/navigation/image';
import NavSettings from './settings';
import { Colour } from 'components/iconsButtons/navigation/navSettings/circle';


function Navigation(): JSX.Element {
    const [expanded, setExpanded] = React.useState<string | false>('panel2');
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Container>
            <Heading>
                <Database />
                <span>Базы данных</span>
            </Heading>

            <MainAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <MainAccordionSummary>
                    Интервальные данные
                </MainAccordionSummary>
                <MainAccordionDetails>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s.
                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <MainAccordionSummary >
                    Событийные данные
                </MainAccordionSummary>
                <MainAccordionDetails>

                    <SmallAccordion>
                        <SmallAccordionSummary>
                            <span>Пример 1</span>
                            <NavSettings marked colour={Colour.blue} />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>

                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 1.1</span>
                                    <NavSettings marked colour={Colour.purple} />
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 1.2</span>
                                    <NavSettings colour={Colour.green} />
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 1.3</span>
                                    <NavSettings marked colour={Colour.palette} />
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </SmallAccordionDetails>
                            </SmallAccordion>
                        </SmallAccordionDetails>
                    </SmallAccordion>

                    <SmallAccordion>
                        <SmallAccordionSummary>
                            <span>Пример 2</span>
                            <NavSettings marked colour={Colour.black} />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 2.1</span>
                                    <NavSettings colour={Colour.palette} />
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary disabled>
                                    <span>Пример 2.2</span>
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>

                                </SmallAccordionDetails>
                            </SmallAccordion>
                        </SmallAccordionDetails>
                    </SmallAccordion>

                    <SmallAccordion>
                        <SmallAccordionSummary>
                            <span>Пример 3</span>
                            <NavSettings marked colour={Colour.orange} />
                        </SmallAccordionSummary>
                        <SmallAccordionDetails>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 3.1</span>
                                    <NavSettings colour={Colour.black} />

                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary disabled>
                                    <span>Пример 3.2</span>
                                    <NavSettings marked colour={Colour.green} />

                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
                                </SmallAccordionDetails>
                            </SmallAccordion>
                        </SmallAccordionDetails>
                    </SmallAccordion>
                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <MainAccordionSummary>
                    Пример
                </MainAccordionSummary>
                <MainAccordionDetails>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </MainAccordionDetails>
            </MainAccordion>

            <Heading>
                <Image />
                <span>Изображения</span>
            </Heading>

            <MainAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <MainAccordionSummary>
                    Стринги
                </MainAccordionSummary>
                <MainAccordionDetails>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <MainAccordionSummary>
                    Блочная модель
                </MainAccordionSummary>
                <MainAccordionDetails>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                </MainAccordionDetails>
            </MainAccordion>
        </Container>
    );
}

export default Navigation;