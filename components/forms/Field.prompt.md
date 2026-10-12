Contact-form controls: caps label, dark field, red focus ring. `Field` wires label ↔ control ids for you.
```jsx
<FormRow>
  <Field label="Full name" placeholder="Your name" />
  <Field label="Email" type="email" placeholder="you@company.co.za" />
</FormRow>
<Field label="Service"><Select placeholder="Select a service" options={SERVICES.map(s => s.title)} /></Field>
<Field label="Message" type="textarea" placeholder="Tell us about your business" />
<Field label="Phone" type="tel" error="Please enter a valid SA number" />
<Button block>Send message</Button>
```
- Placeholders show an example, not the label. SA formats: "+27 (0) 83 …", ".co.za" emails.
- Error colour is bright red (#e63030). There are no success or warning colours; confirm success with a message, not green.
