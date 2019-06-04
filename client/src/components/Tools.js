import React, { Component } from 'react';
import { Container } from 'reactstrap';

class Tools extends Component {
  render() {
    return(
      <Container className="text-info">
        <h4>Parts of Speech Overview</h4>
        <hr/>
        <h5>Noun</h5>
        <p>A noun is a word that denotes a person, place, or thing. In a sentence, nouns answer the questions who and what.</p>
        <ul>
        <li>Example: The dog ran after the ball.</li>
        </ul>
        <p>In the sentence above, there are two nouns, dog and ball. A noun may be concrete (something you can touch, see, etc.), like the nouns in the example above, or a noun may be abstract, as in the sentences below.</p>
        <ul>
        <li>Example 1: She possesses integrity.</li>
        <li>Example 2: He was searching for love.</li>
        </ul>
        <p>The abstract concepts of integrity and love in the sentences above are both nouns.</p>
        <hr/>
        <h5>Verb</h5>
        <p>A verb is a word that denotes action, or a state of being, in a sentence.</p>
        <li>Example 1: Beth rides the bus every day.</li>
        <li>Example 2: Paul was an avid reader.</li>
        <p>In example 1, rides is the verb; it describes what the subject, Beth, does. In example 2, was describes Paul’s state of being and is therefore the verb.</p>
        <p>There may be multiple verbs in a sentence, or there may be a verb phrase consisting of a verb plus a helping verb.</p>
        <ul>
        <li>Example 1: She turned the key and opened the door.</li>
        <li>Example 2: Jackson was studying when I saw him last.</li>
        </ul>
        <p>In example 1, the subject she performs two actions in the sentence, turned and opened. In example 2, the verb phrase is was studying.</p>
        <p>Some words in a sentence may look like verbs but act as something else, like a noun; these are called verbals.</p>
        <hr/>
        <h5>Adjective</h5>
        <p>An adjective is a word that modifies, or describes, a noun or pronoun. Adjectives may precede nouns, or they may appear after a form of the reflexive verb to be (am, are, is, was, etc.).</p>
        <ul>
        <li>Example 1: We live in the red brick house.</li>
        <li>Example 2: She is tall for her age.</li>
        </ul>
        <p>In example 1, two consecutive adjectives, red and brick, both describe the noun house. In example 2, the adjective tall appears after the reflexive verb is and describes the subject, she.</p>
        <hr/>
        <h5>Adverb</h5>
        <p>Just as adjectives modify nouns, adverbs modify, or further describe, verbs. Adverbs may also modify adjectives. (Many, though not all, adverbs end in -ly.)</p>
        <ul>
        <li>Example 1: He waved wildly to get her attention.</li>
        <li>Example 2: The shirt he wore to the party was extremely bright.</li>
        </ul>
        <p>In the first example, the adverb wildly modifies the verb waved. In the second example, the adverb extremely modifies the adjective bright, which describes the noun shirt. While nouns answer the questions who and what, adverbs answer the questions how, when, why, and where.</p>
        <hr/>
        <p>Reference information provided by <a href="https://owl.purdue.edu/owl/general_writing/mechanics/parts_of_speech_overview.html">owl.purdue.edu</a></p>
      </Container>
    )
  }
}

export default Tools;
