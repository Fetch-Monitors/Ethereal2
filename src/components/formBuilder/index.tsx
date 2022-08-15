import React, { useState } from 'react'
import SegmentedControl from '../segmentedControl'
import Toggle from '../toggle'
import Button from '../button'
import LoaderButton from '../button/loader'
import Chip from '../chip'
import Stepper from '../stepper'
import Radio from '../radio'
import { AnimatePresence, motion } from 'framer-motion'

import {
  Wrapper,
  Segment,
  Br,
  Title,
  Label,
  Hint,
  Option,
  Buttons,
  Top,
  Bottom,
  Tag,
} from './elements'
import { MdOutlineInfo } from 'react-icons/md'

const options = [
  {
    label: 'Text',
    id: '0',
    hint: 'Extract and compare raw text.',
  },
  {
    label: 'Number',
    id: '1',
    hint: 'Extract and evaulate numbers.',
  },
  {
    label: 'Image',
    id: '2',
    hint: 'Extract and display images.',
  },
]

export default () => {
  const [dynamic, setDynamic] = useState(false)
  const createPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('e z')
        } else {
          reject(new Error('Ooops'))
        }
      }, 100)
    })
  }
  return (
    <Wrapper>
      <Top>
        <h4>Create a Selector</h4>
        <Br />
        <Segment>
          <Title>Site Settings</Title>
          <Option>
            <span>
              <Label> Premium Data </Label>
              <Hint> Faster rates, works on more sites.</Hint>
            </span>
            <Toggle onClick={console.log} />
          </Option>
          <Option>
            <span>
              <Label> Premium Data </Label>
              <Tag>Hello</Tag>
            </span>
          </Option>
          <Option>
            <span>
              <Label> RenderJS </Label>
              <Hint>
                {' '}
                For dynamic sites.{' '}
                <Chip icon={<MdOutlineInfo size={12} />}>Find out more</Chip>
              </Hint>
            </span>
            <Toggle onClick={console.log} />
          </Option>
        </Segment>
        <Br />
        <Segment>
          <Title>Adoitional Settings</Title>
          <Option>
            <SegmentedControl
              onChange={() => setDynamic(!dynamic)}
              options={[
                { label: 'Option 1', id: '1' },
                { label: 'Option 2', id: '2' },
              ]}
            />
          </Option>
          {/* <Information>Hello world</Information> */}
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={dynamic ? '1' : '0'}
              animate={{ opacity: 1 /* , x: 0 */ }}
              initial={{ opacity: 0 /* , x: dynamic ? 20 : -20 */ }}
              exit={{ opacity: 0 /* , x: dynamic ? 20 : -20  */ }}
              transition={{ duration: 0.15 }}
            >
              {dynamic ? (
                <span>
                  <Option>
                    <span>
                      <Label> Adoitional Option </Label>
                      <Hint> Prolly an input with a wait duration</Hint>
                    </span>
                    <Toggle onClick={console.log} />
                  </Option>
                  <Option>
                    <span>
                      <Label> Something else </Label>
                    </span>
                    <Toggle onClick={console.log} />
                  </Option>
                </span>
              ) : (
                <span>
                  <Option>
                    {' '}
                    <Radio options={options} onChange={console.log} />
                  </Option>
                </span>
              )}
            </motion.span>
          </AnimatePresence>
        </Segment>
      </Top>
      <Bottom>
        <Stepper
          steps={[{ progress: 1 }, { progress: 0.3 }, { progress: 0 }]}
        />
        <Buttons>
          <Button variant="outlined" secondary>
            Back
          </Button>

          <LoaderButton variant="solid" onClick={() => createPromise()}>
            Next
          </LoaderButton>
        </Buttons>
      </Bottom>
    </Wrapper>
  )
}
