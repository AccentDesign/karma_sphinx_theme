Lists
=====

Enumerated Lists
----------------

1. Arabic numerals.

   a) lower alpha)

      (i) (lower roman)

          A. upper alpha.

             I) upper roman)

2. Lists that don't start at 1:

   3. Three

   4. Four

   C. C

   D. D

   iii. iii

   iv. iv

#. List items may also be auto-enumerated.

Definition Lists
----------------

Term
    Definition
Term : classifier
    Definition paragraph 1.

    Definition paragraph 2.
Term
    Definition


Option Lists
------------

For listing command-line options:

-a            command-line option "a"
-b file       options can have arguments
              and long descriptions
--long        options can be long also
--input=file  long options can also have
              arguments

--very-long-option
              The description can also start on the next line.

              The description may contain multiple body elements,
              regardless of where it starts.

-x, -y, -z    Multiple options are an "option group".
-v, --verbose  Commonly-seen: short & long options.
-1 file, --one=file, --two file
              Multiple options with arguments.
/V            DOS/VMS-style options too

There must be at least two spaces between the option and the description.

Field list
----------

.. bibliographic fields (which also require a transform):

:Author: Stuart George
:Address: 123 Example Street
          Example, UK
          A1B 2C3
:Contact: stuart@accentdesign.co.uk
:Authors: Me; Myself; I
:organization: humankind
:date: $Date: 2012-01-03 19:23:53 +0000 (Tue, 03 Jan 2012) $
:status: This is a "work in progress"
:revision: $Revision: 7302 $
:version: 1
:copyright: This document has been placed in the public domain. You
            may do with it as you wish. You may copy, modify,
            redistribute, reattribute, sell, buy, rent, lease,
            destroy, or improve it, quote it at length, excerpt,
            incorporate, collate, fold, staple, or mutilate it, or do
            anything else to it that your or anyone else's heart
            desires.
:field name: This is a generic bibliographic field.
:field name 2:
    Generic bibliographic fields may contain multiple body elements.

    Like this.

:Dedication:

    For Docutils users & co-developers.

:abstract:

    This document is a demonstration of the reStructuredText markup
    language, containing examples of all basic reStructuredText
    constructs and many advanced constructs.

Bullet Lists
------------

- A bullet list

  + Nested bullet list.
  + Nested item 2.

- Item 2.

  Paragraph 2 of item 2.

  * Nested bullet list.
  * Nested item 2.

    - Third level.
    - Item 2.

  * Nested item 3.

- ``inline literall``
- ``inline literall``
- ``inline literall``

Second list level
^^^^^^^^^^^^^^^^^

- here is a list in a second-level section.
- `yahoo <http://www.yahoo.com>`_
- `yahoo <http://www.yahoo.com>`_

  - `yahoo <http://www.yahoo.com>`_
  - here is an inner bullet ``oh``

    - one more ``with an inline literally``. `yahoo <http://www.yahoo.com>`_
      
      heh heh. child. try to beat this embed:

      .. literalinclude:: test_py_module/test.py
          :language: python
          :linenos:
          :lines: 1-13
  - and another. `yahoo <http://www.yahoo.com>`_
  - `yahoo <http://www.yahoo.com>`_
  - ``hi``
- and hehe

But deeper down the rabbit hole
"""""""""""""""""""""""""""""""

- I kept saying that, "deeper down the rabbit hole". `yahoo <http://www.yahoo.com>`_

  - I cackle at night `yahoo <http://www.yahoo.com>`_.
- I'm so lonely here in GZ ``guangzhou``
- A man of python destiny, hopes and dreams. `yahoo <http://www.yahoo.com>`_

  - `yahoo <http://www.yahoo.com>`_

    - `yahoo <http://www.yahoo.com>`_ ``hi``
    - ``destiny``

Hlists
------

.. hlist::
    :columns: 2

    - First item
    - Second item
    - Third item
    - Forth item
    - Fifth item
    - Sixths item

.. rubric:: Hlist with images

.. hlist::
    :columns: 2

    - .. figure:: static/800x600-black.png

         This is a short caption for a figure.

    - .. figure:: static/800x600-black.png

         This is a long caption for a figure. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec porttitor dolor in odio posuere, vitae ornare libero mattis. In lobortis justo vestibulum nibh aliquet, non.

Numbered List
-------------

#. One,
#. Two.
#. Three with long text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Sed feugiat sagittis neque quis eleifend. Duis rutrum lectus sit amet mattis suscipit.

- A) Using bullets and letters. (A)
- B) Using bullets and letters. (B)
- C) Using bullets and letters. (C)
