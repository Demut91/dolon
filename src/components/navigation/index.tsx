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
    return (
        <Container>
            <Heading>
                <Database />
                <span>Базы данных</span>
            </Heading>

            <MainAccordion >
                <MainAccordionSummary>
                    Интервальные данные
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion >
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
                                </SmallAccordionDetails>
                            </SmallAccordion>
                            <SmallAccordion >
                                <SmallAccordionSummary>
                                    <span>Пример 1.3</span>
                                    <NavSettings marked colour={Colour.palette} />
                                </SmallAccordionSummary>
                                <SmallAccordionDetails>
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

            <MainAccordion>
                <MainAccordionSummary>
                    Пример
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <Heading>
                <Image />
                <span>Изображения</span>
            </Heading>

            <MainAccordion>
                <MainAccordionSummary>
                    Стринги
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>

            <MainAccordion>
                <MainAccordionSummary>
                    Блочная модель
                </MainAccordionSummary>
                <MainAccordionDetails>

                </MainAccordionDetails>
            </MainAccordion>
        </Container>
    );
}

export default Navigation;