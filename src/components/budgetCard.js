import React from 'react'
import {Button, Card, CardBody, CardTitle, ProgressBar,Stack} from 'react-bootstrap';
import { currencyFormatter } from '../utils';
export default function budgetcard({
    name,
    amount,
    max})
{
  return (
    <Card>
      
        <CardBody>
            <CardTitle className='d-flex justify-content-between align-items-baseline fw-normal mb-3 '>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)}
                <span className='text-muted fs-6 ms-1'>
                  /{currencyFormatter.format(max)}
                  </span>
                </div>
            </CardTitle>
            <ProgressBar className='rounded-pill'
                          variant={getProgressBarVarinat(amount,max)}
                          min={0}
                          max={max} 
                          now={amount} />
            <Stack direction="horizontal" gap="2" className="mt-4">
              <Button variant='outline-primary' className='ms-auto'>
                Add Expense
              </Button >
              <Button variant='outline-secondary'>
                View Expense
              </Button>
            </Stack>
        </CardBody>
    </Card>
    );
  }
     function getProgressBarVarinat(amount,max){
       const ratio = amount/max ;
       if(ratio < 0.5) return "primary"
       if(ratio < 0.75) return "waring"
       return "danger"
    }

