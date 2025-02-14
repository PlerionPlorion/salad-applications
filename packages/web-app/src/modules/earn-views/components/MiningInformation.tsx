import type { ReactNode } from 'react'
import { Component } from 'react'
import { Img } from 'react-image'
import type { WithStyles } from 'react-jss'
import withStyles from 'react-jss'
import { Divider, Head, P, Scrollbar, SectionHeader, SmartLink } from '../../../components'
import type { SaladTheme } from '../../../SaladTheme'
import miningOverview from '../assets/mining-overview.svg'
import mining from '../assets/mining.svg'

const styles = (theme: SaladTheme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    color: theme.lightGreen,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    paddingTop: '32px',
  },
  splitContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    flexBasis: '50%',
  },
  overviewImage: {
    maxWidth: 600,
    padding: 40,
    margin: 'auto',
    height: '100%',
  },
})

interface Props extends WithStyles<typeof styles> {}

class _MiningInformation extends Component<Props> {
  public override render(): ReactNode {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <Head title="Mining" />
        <Scrollbar>
          <div className={classes.content}>
            <div className={classes.splitContainer}>
              <div className={classes.column} style={{ paddingRight: 20 }}>
                <SectionHeader>What is Mining?</SectionHeader>
                <P>
                  Mining powers the world of cryptocurrency, individual miners (computers) form vast networks of shared
                  processing power to keep networks like Ethereum and Bitcoin running. In exchange for this work, miners
                  get paid in the cryptocurrency their machine supports. Salad makes this process simple - just click
                  start and you'll begin earning Salad balance, we'll take care of the rest.
                </P>
              </div>
              <div className={classes.column}>
                <Img className={classes.overviewImage} src={mining} />
              </div>
            </div>
            <Divider />
            <SectionHeader>Getting Started</SectionHeader>
            <P>
              Mining is easy, simply press the "Start" button and Salad will automatically start mining for you. In many
              cases it will take your machine some time to get to the "Chopping" status while Salad finds the best miner
              to run on your machine.
              <b> Remember, Salad is best left AFK!!!</b>
            </P>

            <Img className={classes.overviewImage} src={miningOverview} />

            <P>
              Don't forget to enable
              <b>Auto Start</b>, this will allow Salad to automatically start when you step away from your machine.
            </P>
            <Divider />
            <SectionHeader>What Does the Status Mean?</SectionHeader>
            <div className={classes.splitContainer}>
              <div className={classes.column}>
                <P>There are 3 states of Salad that you should be aware of:</P>
                <P>
                  <b>STOPPED</b>
                  <br /> Salad isn't doing anything, your machine is NOT being used, and you won't earn anything.
                </P>
                <P>
                  <b>PREPPING</b>
                  <br /> Salad is now downloading and running a miner. Things are warming up but we are still waiting
                  for confirmation that your miner is running properly. This can take some time.
                </P>
                <P>
                  <b>CHOPPING</b>
                  <br /> Salad has now confirmed that your miner is running correctly and you will start to earn soon.
                </P>
              </div>
              <div className={classes.column}></div>
            </div>
            <Divider />

            <div className={classes.splitContainer}>
              <div className={classes.column}>
                <SectionHeader>More Information</SectionHeader>
                <br />
                <P>
                  <SmartLink to="https://support.salad.com/hc/en-us/sections/360008458292-Anti-Virus">
                    Having Anti-Virus Issues?
                  </SmartLink>
                </P>
                <P>
                  <SmartLink to="https://salad.com/blog/gamers-guide-blockchain-crypto">
                    Gamers Guide to Blockchain
                  </SmartLink>
                </P>
                <P>
                  <SmartLink to="https://salad.com/blog/making-money-with-salad-whats-the-catch">
                    What's the Catch?
                  </SmartLink>
                </P>
                <P>
                  <SmartLink to="https://salad.com/blog/does-mining-for-cryptocurrency-damage-my-gpu">
                    Does mining hurt my machine?
                  </SmartLink>
                </P>
              </div>
              <div className={classes.column} style={{ paddingRight: 20 }}></div>
            </div>
            <Divider />
          </div>
        </Scrollbar>
      </div>
    )
  }
}

export const MiningInformation = withStyles(styles)(_MiningInformation)
